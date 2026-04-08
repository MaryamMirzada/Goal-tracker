function GoalCard() {
  return (
    <div className="bg-white p-4 shadow rounded space-y-3">

      <h3 className="font-bold">Read 20 pages</h3>

      <span className="text-sm bg-blue-100 px-2 py-1 rounded">
        Study
      </span>

      <div className="w-full bg-gray-200 h-3 rounded">
        <div className="bg-green-500 h-3 rounded w-1/2"></div>
      </div>

      <p className="text-sm text-gray-500">
        10 / 20 progress
      </p>

      <div className="flex gap-2">

        <button className="bg-green-500 text-white px-3 py-1 rounded">
          + Progress
        </button>

        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
          Pause
        </button>

        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>

      </div>

    </div>
  )
}

export default GoalCard