import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GiClick } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function BusinessAd() {
  return (
    <Card className="text-center transform rotate-x-12 rotate-y-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md rounded-lg p-4">
      <Card.Header className="text-white font-bold">Get our Business Partner</Card.Header>
      <Card.Body>
        <Card.Text className="text-white mb-4">
          Dig into the world's most complete restaurant platform
        </Card.Text>
        <Card.Text className="text-white mb-6">
          Register your organization Now!
        </Card.Text>
        <div className='flex justify-center items-center'>
          <GiClick className="text-white mr-2 transition duration-300 transform hover:scale-110" />
          <Link to="/business-registration">
            <Button className="text-white hover:text-white transition duration-300 transform hover:scale-110">click here</Button>
          </Link>        </div>
      </Card.Body>
    </Card>
  );
}

export default BusinessAd;
