export default function TicketCard({ title, description, priorityLevel }) {
  let priorityClassValue;
  if (priorityLevel === "low") {
    priorityClassValue = "bg-green-100 text-green-800";
  } else if (priorityLevel === "medium") {
    priorityClassValue = "bg-yellow-100 text-yellow-800";
  } else if (priorityLevel === "high") {
    priorityClassValue = "bg-red-100 text-red-800";
  }

  return (
    <div className="flex justify-between bg-white p-4 rounded-md items-center">
      <div className="w-3/4">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm truncate">{description}</p>
      </div>
      <div className={priorityClassValue + " px-2 py-1 rounded-md"}>
        {
          /* For capitalizing the first letter */
          priorityLevel.charAt(0).toUpperCase() +
            priorityLevel.slice(1) +
            // For spacing between the priority level and the word "Priority"
            " "
        }
        Priority
      </div>
    </div>
  );
}
