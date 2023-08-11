import Card from "@tremor/react/dist/components/layout-elements/Card/Card"
import Text from "@tremor/react/dist/components/text-elements/Text/Text"
import Metric from "@tremor/react/dist/components/text-elements/Metric/Metric"

function App() {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
    </Card>
  )
}

export default App
