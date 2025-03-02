import { Button } from "@/components/ui/button";

export default function App () {
  return (
    <div className="p-[10px] bg-blue-700">
      <h1>MyApp</h1>
      <Button onClick={() => alert('hello')}>Add</Button>
    </div>
  )
}
