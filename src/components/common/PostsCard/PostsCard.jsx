import './PostsCard.scss'
export default function PostsCard({posts}) {
 return (
   <div className='posts-card' >
   <p className='name'> {posts.name}</p>
   <p className='timeStamp' >{posts.timeStamp}</p>
   <p className='status'>{posts.status}</p>
   </div>
 );
}