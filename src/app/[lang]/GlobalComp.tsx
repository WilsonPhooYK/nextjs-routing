'use client';

import { memo, useEffect, useState } from "react";

const GlobalComp = () => {
  // const [mountedCount, setMountedCount] = useState(1);

  useEffect(() => {
    console.log('SHOULD ONLY MOUNT 1 TIME!');
  }, [])

  return (
    <div>
      <h1>Should only mount 1 time</h1>
      <br />
    </div>
  )
};

export default memo(GlobalComp);
