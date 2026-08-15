import { useState, useRef, type FormEvent } from "react";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { BLOCKED_DOMAINS } from "../data/blocked-domains";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailInput, setEmailInput] = useState("");
  const [validatingEmail, setValidatingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "valid" | "invalid">(
    "idle",
  );
  const [emailError, setEmailError] = useState("");

  const verifyEmailDomain = async (email: string) => {
    setEmailError("");
    setEmailStatus("idle");

    if (!email.includes("@")) return;

    const parts = email.split("@");
    if (parts.length !== 2) return;

    const domain = parts[1].trim().toLowerCase();

    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(domain)) {
      setEmailStatus("invalid");
      setEmailError("Invalid domain format (ex: name@domain.com)");
      return;
    }

    if (BLOCKED_DOMAINS.includes(domain)) {
      setEmailStatus("invalid");
      setEmailError("Please use a valid personal or corporate email address.");
      return;
    }

    setValidatingEmail(true);

    try {
      const res = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`,
      );
      const data = await res.json();

      if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
        setEmailStatus("valid");
      } else {
        setEmailStatus("invalid");
        setEmailError("This domain does not have active mail servers.");
      }
    } catch {
      setEmailStatus("valid");
    } finally {
      setValidatingEmail(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailInput(value);

    if (!value) {
      setEmailStatus("idle");
      setEmailError("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        setStatus("error");
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Ready to build something{" "}
          <span className="text-[rgb(37,106,244)] text-glow">
            extraordinary?
          </span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Whether you have a specific project in mind or need a developer for
          your team, let's connect and build something extraordinary together.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-[#161b22] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              IDENTITY (NAME)
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
              <span>ORIGIN (EMAIL)</span>
              {validatingEmail && (
                <span className="text-blue-400 text-[10px] lowercase">
                  Verifying domain...
                </span>
              )}
            </label>
            <input
              type="email"
              name="user_email"
              required
              value={emailInput}
              onChange={handleEmailChange}
              onBlur={() => verifyEmailDomain(emailInput)}
              placeholder="john@domain.com"
              className={`bg-[#0d1117] border rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:bg-[#0d1117] [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_50px_#0d1117_inset] [&:-webkit-autofill]:[ -webkit-text-fill-color:#e2e8f0] transition-colors ${
                emailStatus === "invalid"
                  ? "border-rose-500"
                  : emailStatus === "valid"
                    ? "border-emerald-500"
                    : "border-white/10 focus:border-blue-500"
              }`}
            />
            {emailError && (
              <span className="text-rose-400 text-xs mt-0.5">{emailError}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            SUBJECT (TOPIC)
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Job Opportunity / Freelance Project / Inquiry"
            className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            MESSAGE
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="System/job description..."
            className="bg-[#0d1117] border border-white/10 rounded-lg p-4 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <span>SENDING EMAIL...</span>
          ) : (
            <>
              <FiSend className="text-base" />
              <span>SEND COMMAND</span>
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-400 text-xs justify-center pt-2">
            <FiCheck />
            <span>
              Your email was sent successfully. I will get back to you soon!
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-rose-400 text-xs justify-center pt-2">
            <FiAlertCircle />
            <span>Failed to send email. Please try again.</span>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
