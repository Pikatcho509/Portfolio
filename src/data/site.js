// Sant kontwòl la: yon sèl kote pou chanje nimewo, email ak lyen yo.

export const PHONE_PRIMARY = "+50949033260";
export const PHONE_SECONDARY = "+50940057183";

// `tel:` mande nimewo a san espas; je moun nan li l pi fasil ak espas.
export const PHONE_PRIMARY_DISPLAY = "+509 4903 3260";
export const PHONE_SECONDARY_DISPLAY = "+509 4005 7183";
export const WHATSAPP_NUMBER = "50949033260";
export const EMAIL = "pikatcho77@gmail.com";
export const GITHUB = "https://github.com/Pikatcho509";

export const DEFAULT_MESSAGE =
  "Bonjou Karl! Mwen sot wè pòtfolyo w la, mwen enterese nan travay ak ou sou yon pwoje.";

/**
 * Bati yon lyen wa.me. Sou telefòn li louvri app WhatsApp la dirèkteman,
 * sou òdinatè li louvri WhatsApp Web — nan de ka yo mesaj la deja ekri.
 */
export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Lyen mailto ak sijè ak kò mesaj deja ranpli, konsa moun nan pa bezwen
 * chèche kisa pou l ekri.
 */
export function mailtoLink(
  subject = "Yon pwoje pou Karl (Pikatcho509)",
  body = DEFAULT_MESSAGE,
) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
