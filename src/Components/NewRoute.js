import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from 'antd';

const NewRoute = props => (
    <div className='flex'>
        <h3>See the url! new route</h3>
        <Button className='ml1' onClick={() => props.history.push('/')}>Click to go back to homepage</Button>
    </div>
)

export default withRouter(NewRoute);