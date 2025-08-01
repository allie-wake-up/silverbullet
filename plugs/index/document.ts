import { space, system } from "@silverbulletmd/silverbullet/syscalls";
import { indexObjects } from "./api.ts";
import type { DocumentMeta } from "../../type/index.ts";

// Note: clearFileIndex is not called but since this is the only attachmet:index listener, this should be fine (famous last words)
export async function indexDocument(name: string) {
  if (await system.getMode() === "ro") {
    return;
  }
  // console.log("Indexing document", name);
  const fileMeta = await space.getDocumentMeta(name);
  await indexObjects<DocumentMeta>(fileMeta.name, [fileMeta]);
}
