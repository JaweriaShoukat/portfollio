

export default function Education(props) {
    return (
        <>
           <li className="px-5 before:content[''] before:border before:border-neutral-400 before:bg-teal-50 before:w-4 before:h-4 before:rounded-full before:absolute before:top-[15px] before:left-[-7px] relative">
            <div className="list-inner flex justify-between items-center">
                <div className="time">
                    <span className="bg-black/10 py-1 px-3 rounded-3xl text-sm text-neutral-700">{props.date}</span>
                </div>
                <div className="place">
                    <h3 className="text-base font-semibold">{props.uni}</h3>
                    <span className="text-sm text-neutral-700">{props.degTitle}</span>
                </div>
            </div>
        </li>
        </>
    )
}
