import "./message.css"

export default function Message({own}) {
    return (
        <div className={own?"message own":"message"}>
            <div className="messageTop">
            <img src="https://imagevars.gulfnews.com/2018/3/8/1_16a084b8a95.2184560_3671455509_16a084b8a95_medium.jpg" 
            alt="" className="messageImg" />
            </div>
            <p className="messageText">Hello this is a message</p>
            <div className="messageBottom">
            1 hour ago
            </div>
        </div>
    )
}
