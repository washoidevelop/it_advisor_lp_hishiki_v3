import { cn } from "@/lib/utils"

export function ScrollGuide({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("flex items-center gap-8", className)} 
      {...props}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-800"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
        <div className="w-12 h-12 -mt-6 animate-bounce animation-delay-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-800"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
