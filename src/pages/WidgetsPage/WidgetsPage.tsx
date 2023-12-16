import Row from '~/components/Row'
import { Button } from '~/components/Forms'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '~/redux/slices/counterSlice'
import { RootState } from '~/redux/store'

function WidgetsPage() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Row>
      <div className='basis-full border'>
        <h1>Counter {count} </h1>
        <div className='flex items-center gap-2'>
          <Button name='+' onClick={() => dispatch(increment())}></Button>
          <Button name='-' onClick={() => dispatch(decrement())}></Button>
        </div>
      </div>
    </Row>
  )
}

export default WidgetsPage
