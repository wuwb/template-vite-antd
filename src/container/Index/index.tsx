import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { get } from '@/utils';

function Index() {
  useEffect(() => {
    get('/index-infos').then(() => {

    })
  }, [])
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
    </div>
  );
}

export default Index;
