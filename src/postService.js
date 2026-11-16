import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

export async function createPost(post) {
  const docRef = await addDoc(collection(db, "posts"), {
    title: post.title,
    description: post.description || "",
    body: post.body,
    category: post.category,
    image: post.image || "",
    media: post.media || [],
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function deletePost(postId) {
  const { doc, deleteDoc } = await import("firebase/firestore");

  await deleteDoc(doc(db, "posts", postId));
}


export async function updatePost(postId, changes) {
  const { doc, updateDoc } = await import("firebase/firestore");

  await updateDoc(doc(db, "posts", postId), {
    ...changes,
  });
}

