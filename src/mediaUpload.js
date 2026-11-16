
import { auth } from "./firebase";

const WORKER_URL =
  "https://clara-website-upload.clararueck.workers.dev/sign-upload";
export async function uploadMedia(file) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Bitte zuerst anmelden.");
  }

  if (!file || !["image/", "video/"].some(
    (type) => file.type.startsWith(type)
  )) {
    throw new Error("Bitte ein Bild oder Video auswählen.");
  }

  // 1. Firebase 로그인 토큰
  const token = await user.getIdToken();

  // 2. Cloudflare Worker에서 업로드 서명 요청
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resourceType: file.type.startsWith("video/")
        ? "video"
        : "image",
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Upload authorization failed.");
  }

  // 3. Cloudinary에 파일 업로드
  const resourceType = file.type.startsWith("video/")
    ? "video"
    : "image";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", result.apiKey);
  formData.append("timestamp", String(result.timestamp));
  formData.append("signature", result.signature);
  formData.append("folder", result.folder);

  const uploadResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${result.cloudName}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const uploaded = await uploadResponse.json();

  if (!uploadResponse.ok) {
    throw new Error(
      uploaded.error?.message || "Cloudinary upload failed."
    );
  }

  return {
    url: uploaded.secure_url,
    publicId: uploaded.public_id,
    resourceType,
  };
}
