import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TodosLoading() {
  return (
    <ul className="list-group">
    <SkeletonTheme baseColor="#FFFFFF" highlightColor="#C0C0C0">
      
      
      <Skeleton count={5} height="50px"> 
      
      <li className="list-group-item d-flex justify-content-between align-items-start mt-5 mb-5"></li>
      
      </Skeleton>
        
      
    </SkeletonTheme>
    </ul>
  );
  }

  export { TodosLoading }