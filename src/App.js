import { Amplify } from 'aws-amplify';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import HotelSearch from './pages/HotelSearch'

const config = {
    API: {
        endpoints: [
            {
                name: "hotelSearchAppApi",
                endpoint: "http://127.0.0.1:5000"
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
