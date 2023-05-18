import { useNavigate,useParams,useLocation } from "react-router-dom"


export default function withRouter(Componnent){
  return function (props) {
    const push=useNavigate()
    const match=useParams()
    const location=useLocation()
    // push 名字是跟函数式组件里面的const navigate=useNavigate()一样的，只是还了名字，在类组件里面用history.push看着跟v5的withRouter是一样的，其实是两个东西
    return <Componnent {...props} history={{push:push,match,location}} />
  }
}