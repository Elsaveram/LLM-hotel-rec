import { Amplify } from 'aws-amplify';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import HotelSearch from './pages/HotelSearch'

const config = {
    API: {
        endpoints: [
            {
                name: "hotelSearchAppApi",
                endpoint: "https://p72q3re0bj.execute-api.us-east-2.amazonaws.com/PROD"
            }
        ]
    }
};

Amplify.configure(config);

function App() {
    return (
        <div className="App">
            <HotelSearch />
        </div>
    );
}

export default App;
