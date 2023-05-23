import { PropsWithChildren } from "react"

function AuthWrapper({title, subtitle, children}: PropsWithChildren<{title: string, subtitle?: string}>) {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
    <div className="flex flex-col sm:flex-row rounded-lg shadow-light">
        <div className="bg-green-700 rounded-t-lg sm:rounded-s-lg sm:rounded-tr-none p-5 flex items-center justify-center">
            <div className="text-white font-bold">Dose-track</div>
        </div>
        <div className="bg-white p-10 sm:px-20 rounded-b-lg sm:rounded-e-lg">
            <div className="flex flex-col gap-2 mb-10 text-gray-500">
                <div className="text-2xl font-bold">{title}</div>
                <div>{subtitle}</div>
            </div>
            {children}
        </div>
    </div>
</div>
  )
}

export default AuthWrapper