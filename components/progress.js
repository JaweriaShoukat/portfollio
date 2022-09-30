
export default function ProgressBar(props) {

  

  return (
    <div className="skillBar">
      <div className="flex justify-between mb-2">
        <span>{props.programing}</span><span>{props.Percntg}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 h-1 text-xs font-medium text-neutral-700 text-right p-0.5 leading-none rounded-full"
        style={{ width: `${props.Percntg}%` }} ></div>
      </div>
    </div>

  )
}
