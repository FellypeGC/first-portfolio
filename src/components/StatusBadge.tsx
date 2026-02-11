type StatusBadgeProps = {
  isAvailable: boolean;
  companyName: string;
};

type StatusConfig = {
  statusClasses: string;
  dotClasses: string;
  label: string;
}

const StatusBadge = ({ isAvailable, companyName }: StatusBadgeProps) => {
  // 1. Definimos as variáveis de estilo baseadas no status
  const status: StatusConfig = {
    statusClasses: isAvailable ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-[rgba(37,106,244,0.1)] text-[rgb(37,106,244)] border-[rgba(37,106,244,0.2)]",
    dotClasses: isAvailable ? "bg-green-500" : "bg-[rgb(37,106,244)]",
    label: isAvailable ? "Available for Hire" : `Working at ${companyName}`,
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${status.statusClasses}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.dotClasses}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dotClasses}`}></span>
      </span>
      <span>{status.label}</span>
    </div>
  );
};

export default StatusBadge;