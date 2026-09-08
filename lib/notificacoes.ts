export type NotificacaoPayload = { titulo: string; mensagem: string; url?: string };

export async function solicitarPermissaoPush() {
  if (typeof window === "undefined" || !("Notification" in window)) return "unsupported";
  return Notification.requestPermission();
}

export function exibirNotificacao({ titulo, mensagem }: NotificacaoPayload) {
  if (typeof window !== "undefined" && Notification.permission === "granted") {
    new Notification(titulo, { body: mensagem, icon: "/icon.svg" });
  }
}
