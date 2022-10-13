import { Button } from '../components/react/Button';

export function App(){

    return (
        <div>
            <Button onClick={()=>{
                alert('hello there kenobi')
            }}>
                Click Here
            </Button>
        </div>
    )
}