import { useState, useRef, type FormEvent } from "react";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { BLOCKED_DOMAINS } from "../data/blocked-domains";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const COOLDOWN_TIME_MS = 60000; // 60 segundos entre envios

const Contact = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [validatingEmail, setValidatingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "valid" | "invalid">(
    "idle",
  );
  const [emailError, setEmailError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const verifyEmailDomain = async (email: string) => {
    const cleanEmail = email.trim();
    setEmailError("");
    setEmailStatus("idle");

    if (!cleanEmail.includes("@")) return;

    const parts = cleanEmail.split("@");
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

    if (honeypot) {
      setStatus("success");
      formRef.current.reset();
      return;
    }

    if (emailStatus === "invalid" || validatingEmail) {
      setErrorMessage("Please fix the email address before sending.");
      setStatus("error");
      return;
    }

    const lastSent = localStorage.getItem("last_email_sent_time");
    if (lastSent && Date.now() - Number(lastSent) < COOLDOWN_TIME_MS) {
      const remainingSeconds = Math.ceil(
        (COOLDOWN_TIME_MS - (Date.now() - Number(lastSent))) / 1000,
      );
      setErrorMessage(
        `Please wait ${remainingSeconds}s before sending another message.`,
      );
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        setStatus("success");
        localStorage.setItem("last_email_sent_time", Date.now().toString());
        formRef.current?.reset();
        setEmailInput("");
        setEmailStatus("idle");
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        setErrorMessage("Failed to send email. Please try again.");
        setStatus("error");
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto min-h-screen flex justify-center flex-col"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {t("contact.title")}{" "}
          <span className="text-[rgb(37,106,244)] text-glow">
            {t("contact.titleHighlight")}
          </span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-[#161b22] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
      >
        {/* Campo Honeypot Oculto (Anti-Spam Bot) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_url">{t("contact.labels.website_url")}</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="user_name"
              className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
            >
              {t("contact.labels.name")}
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              required
              placeholder={t("contact.placeholders.name")}
              className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_50px_#0d1117_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#e2e8f0]"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label
              htmlFor="user_email"
              className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between"
            >
              <span>{t("contact.labels.email")}</span>
              {validatingEmail && (
                <span className="text-blue-400 text-[10px] lowercase animate-pulse">
                  {t("contact.verifyingDomain")}
                </span>
              )}
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              required
              value={emailInput}
              onChange={handleEmailChange}
              onBlur={() => verifyEmailDomain(emailInput)}
              placeholder={t("contact.placeholders.email")}
              aria-invalid={emailStatus === "invalid"}
              aria-describedby={emailError ? "email-error-msg" : undefined}
              className={`bg-[#0d1117] border rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:bg-[#0d1117] transition-colors [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_50px_#0d1117_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#e2e8f0] ${
                emailStatus === "invalid"
                  ? "border-rose-500"
                  : emailStatus === "valid"
                    ? "border-emerald-500"
                    : "border-white/10 focus:border-blue-500"
              }`}
            />
            {emailError && (
              <span
                id="email-error-msg"
                className="text-rose-400 text-xs mt-0.5"
              >
                {emailError}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            {t("contact.labels.subject")}
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder={t("contact.placeholders.subject")}
            className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_50px_#0d1117_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#e2e8f0]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            {t("contact.labels.message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={t("contact.placeholders.message")}
            className="bg-[#0d1117] border border-white/10 rounded-lg p-4 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_50px_#0d1117_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#e2e8f0]"
          />
        </div>

        <button
          type="submit"
          disabled={loading || validatingEmail}
          aria-disabled={loading || validatingEmail}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <span>{t("contact.sending")}</span>
          ) : (
            <>
              <FiSend className="text-base" />
              <span>{t("contact.button")}</span>
            </>
          )}
        </button>

        {status === "success" && (
          <div
            role="status"
            className="flex items-center gap-2 text-emerald-400 text-xs justify-center pt-2"
          >
            <FiCheck />
            <span>
              {t("contact.success")}
            </span>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="flex items-center gap-2 text-rose-400 text-xs justify-center pt-2"
          >
            <FiAlertCircle />
            <span>
              {errorMessage || t("contact.errorDefault")}
            </span>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
