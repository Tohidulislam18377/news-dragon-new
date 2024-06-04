import moment from 'moment';
import './Header.css'
import logo from '../../assets/images/logo.png';
import { Button, Container,} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
  return (
    <Container>
      <div className='text-center mt-3 mb-3'>
        <img className='fluid mb-1' src={logo} alt="" />
        <p className='mb-0'>Journalism Without Fear or Favour</p>
        <p>{moment().format('dddd, MMMM D, YYYY,')}</p>
      </div>
      <div className='mb-3 d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className='text-danger pt-2 back'>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea beatae odit voluptatibus dolorum sequi aliquid minus, repellat reiciendis, ex laboriosam aperiam itaque consequuntur animi qui neque praesentium. Saepe nobis dolorum sed vel, nulla pariatur quos modi odio eaque vero id inventore repellat possimus fugiat ad explicabo veritatis eos corrupti? Et earum similique deserunt aspernatur tenetur quis sint quisquam adipisci, eveniet inventore excepturi vel dolorum deleniti saepe natus cupiditate voluptatum aperiam rem! Aut, voluptatum voluptate atque et id quo error? Quos est explicabo dolorem perferendis accusamus odio fuga qui earum iure amet? Optio libero sit neque illo, voluptatum ipsum unde!</p>
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;