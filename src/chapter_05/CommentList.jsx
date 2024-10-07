import React from "react";
import Comment from "./Comment";

// comments 배열에 댓글 데이터를 담고있는 객체 넣기
const comments = [
    {
        name: "닉네임",
        comment: "이곳에 댓글을 작성하세요.",
    },
    {
        name: "킵지혜",
        comment: "킵지혜입니다~~",
    },
    {
        name: "유지혜",
        comment: "유지혜입니닥~!~!",
    },
];

// 자바스크립트 배열 map함수를 써서 comment컴포넌트 리턴하기
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return <Comment name={comment.name} comment={comment.comment} />;
            })}
        </div>
    );
}

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"닉네임"} comment={"여기는 댓글창입니다."} />
//             <Comment name={"킵지혜"} comment={"안녕하세요 킵지혜입니다."} />
//             <Comment name={"유지혜"} comment={"안녕하세요 저는 그냥 유지혜입니다."} />
//         </div>
//     );
// }

export default CommentList;
