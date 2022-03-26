function formatTwoDigits(number) {
    if(number < 10) {
        return '0' + number;
    }
    return number;
}

function formatDate(date) {
    return `${formatTwoDigits(date.getHours())}:${formatTwoDigits(date.getMinutes())} ${date.toLocaleDateString()}`;
}

export function CommentBlock({ comment, depth = 0 }) {
    return (
        <div>
            <div className="comment_block" style={{marginLeft: depth * 30 + 'px'}}>
                <div className="top">
                    <img className="avatar" src={comment.author.avatarUrl} alt="" />
                    <span className="name">{comment.author.name}</span>
                    <span className="date">{formatDate(new Date(comment.created))}</span>
                </div>
                <div className="text">
                    {comment.text}
                </div>
            </div>
            {comment.answers && comment.answers.map((item, i) => (
                <CommentBlock comment={item} key={i} depth= {depth + 1}/>
            ))}
        </div>
    )
}