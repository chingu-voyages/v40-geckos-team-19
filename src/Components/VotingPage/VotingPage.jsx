import React from "react";
import { useState, useEffect } from "react";
import "./VotingPage.css";
import Dropzone from "./Dropzone";
import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import DesignModal from "./DesignModal";
import { db, storage } from "../Firebase/firebase.js";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function VotingPage() {
  const [design1DownloadUrl, setDesign1DownloadUrl] = useState(null);
  const [dropedImages1, setDropedImages1] = useState(null);
  const [design2DownloadUrl, setDesign2DownloadUrl] = useState(null);
  const [dropedImages2, setDropedImages2] = useState(null);
  const [previewMode1, setPreviewMode1] = useState(false);
  const [previewMode2, setPreviewMode2] = useState(false);
  const [design1VoteNumbers, setDesign1VoteNumbers] = useState(0);
  const [design2VoteNumbers, setDesign2VoteNumbers] = useState(0);
  const [pagemode, setPagemode] = useState("voting");
  const [votingPageID, setVotingPageID] = useState("xshrMf0fNV6CQl8GWxYW");
  const [design1Voted, setDesign1Voted] = useState(false);
  const [design2Voted, setDesign2Voted] = useState(false);
  const [commentArray, setCommentArray] = useState();
  const [userVoted, setUserVoted] = useState(false);
  const [designModalIsOpen, setDesignModalIsOpen] = useState(false);
  const [selectedDesignInModal, setSelectedDesignInModal] = useState(2);

  const voteDesign1 = async () => {
    const docRef = doc(db, "images", votingPageID);
    const docSnap = await getDoc(docRef);
    const design1VoteNumbers = docSnap.data().design1Votes;
    await updateDoc(docRef, {
      design1Votes: design1VoteNumbers + 1,
    });
    setDesign1VoteNumbers(design1VoteNumbers + 1);
  };

  const voteDesign2 = async () => {
    const docRef = doc(db, "images", votingPageID);
    const docSnap = await getDoc(docRef);
    const design2VoteNumbers = docSnap.data().design2Votes;
    await updateDoc(docRef, {
      design2Votes: design2VoteNumbers + 1,
    });
    setDesign2VoteNumbers(design2VoteNumbers + 1);
  };

  const unvoteDesign1 = async () => {
    const docRef = doc(db, "images", votingPageID);
    const docSnap = await getDoc(docRef);
    const design1VoteNumbers = docSnap.data().design1Votes;
    await updateDoc(docRef, {
      design1Votes: design1VoteNumbers - 1,
    });
    setDesign1VoteNumbers(design1VoteNumbers - 1);
  };

  const unvoteDesign2 = async () => {
    const docRef = doc(db, "images", votingPageID);
    const docSnap = await getDoc(docRef);
    const design2VoteNumbers = docSnap.data().design2Votes;
    await updateDoc(docRef, {
      design2Votes: design2VoteNumbers - 1,
    });
    setDesign2VoteNumbers(design2VoteNumbers - 1);
  };

  const downloadDesigns = async () => {
    const imageURLRef = doc(db, "images", votingPageID);
    const docSnap = await getDoc(imageURLRef);
    setDesign1DownloadUrl(docSnap.data().image1DownloadUrl);
    setDesign2DownloadUrl(docSnap.data().image2DownloadUrl);
  };

  const uploadImages = async () => {
    const docRef = await addDoc(collection(db, "images"), {
      timestamp: serverTimestamp(),
      name: "owner1",
      design1Votes: 2,
      design2Votes: 3,
    });

    const docSnap = await getDoc(docRef);
    setDesign1VoteNumbers(docSnap.data().design1Votes);
    setDesign2VoteNumbers(docSnap.data().design2Votes);
    await Promise.all(
      dropedImages1.map((image) => {
        const ImageRef = ref(storage, `images/${docRef.id}/${image.path}`);
        uploadBytes(ImageRef, image, "data_url").then(async () => {
          const downloadUrl = await getDownloadURL(ImageRef);
          setDesign1DownloadUrl(downloadUrl);
          setPreviewMode1(false);
          await updateDoc(doc(db, "images", docRef.id), {
            image1DownloadUrl: arrayUnion(downloadUrl),
          });
        });
      })
    );
    await Promise.all(
      dropedImages2.map((image) => {
        const ImageRef = ref(storage, `images/${docRef.id}/${image.path}`);
        uploadBytes(ImageRef, image, "data_url").then(async () => {
          const downloadUrl = await getDownloadURL(ImageRef);
          setDesign2DownloadUrl(downloadUrl);
          setPreviewMode2(false);
          await updateDoc(doc(db, "images", docRef.id), {
            image2DownloadUrl: arrayUnion(downloadUrl),
          });
        });
      })
    );
  };

  const sendComment = async (comment) => {
    const docRef = doc(db, "images", votingPageID);
    await updateDoc(docRef, {
      comments: arrayUnion({
        id: uuidv4(),
        userImage:
          "https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg?forcejpeg=true",
        userName: "user",
        text: comment,
        time: new Date(),
      }),
    });
    const docSnap = await getDoc(docRef);
    setCommentArray(docSnap.data().comments);
  };

  useEffect(() => {
    if (pagemode == "voting") {
      (async () => {
        downloadDesigns();
        const docRef = doc(db, "images", votingPageID);
        const docSnap = await getDoc(docRef);
        const design1VoteNumbers = docSnap.data().design1Votes;
        const design2VoteNumbers = docSnap.data().design2Votes;
        setDesign1VoteNumbers(design1VoteNumbers);
        setDesign2VoteNumbers(design2VoteNumbers);
        setCommentArray(docSnap.data().comments);
      })();
    }
    return () => {};
  }, []);

  return (
    <div className="container">
      {designModalIsOpen ? (
        <DesignModal
          isOpen={designModalIsOpen}
          setModalState={setDesignModalIsOpen}
          design1Url={design1DownloadUrl}
          design2Url={design2DownloadUrl}
          selectedDesign={selectedDesignInModal}
          setSelectedDesign={setSelectedDesignInModal}
          voteDesign1={voteDesign1}
          unvoteDesign1={unvoteDesign1}
          voteDesign2={voteDesign2}
          unvoteDesign2={unvoteDesign2}
          design1Voted={design1Voted}
          design2Voted={design2Voted}
          setDesign1Voted={setDesign1Voted}
          setDesign2Voted={setDesign2Voted}
          setUserVoted={setUserVoted}
          userVoted={userVoted}
        />
      ) : (
        ""
      )}
      <Dropzone
        vote={voteDesign1}
        unvote={unvoteDesign1}
        designNumber={1}
        votingPageID={"xshrMf0fNV6CQl8GWxYW"}
        setdropimage={setDropedImages1}
        previewImage={dropedImages1}
        preview={previewMode1}
        setPreviewMode={setPreviewMode1}
        firebaseImage={design1DownloadUrl}
        voteNumber={design1VoteNumbers}
        pagemode={pagemode}
        voted={design1Voted}
        votedState={setDesign1Voted}
        setUserVoted={setUserVoted}
        userVoted={userVoted}
        setModalState={setDesignModalIsOpen}
        setSelectedDesign={setSelectedDesignInModal}
      />
      <Dropzone
        vote={voteDesign2}
        unvote={unvoteDesign2}
        designNumber={2}
        votingPageID={"xshrMf0fNV6CQl8GWxYW"}
        setdropimage={setDropedImages2}
        previewImage={dropedImages2}
        preview={previewMode2}
        setPreviewMode={setPreviewMode2}
        firebaseImage={design2DownloadUrl}
        voteNumber={design2VoteNumbers}
        pagemode={pagemode}
        voted={design2Voted}
        votedState={setDesign2Voted}
        setUserVoted={setUserVoted}
        userVoted={userVoted}
        setModalState={setDesignModalIsOpen}
        setSelectedDesign={setSelectedDesignInModal}
      />
      {!(pagemode == "voting") ? (
        <button onClick={uploadImages}>click to upload</button>
      ) : (
        <CommentsForm sendComment={sendComment} />
      )}
      {commentArray?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment.text}
          commentId={comment.id}
          commenterName={comment.userName}
          commenterImage={comment.userImage}
        />
      ))}
    </div>
  );
}
