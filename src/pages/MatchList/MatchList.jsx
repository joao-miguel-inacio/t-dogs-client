import React from 'react';
import { useEffect } from "react";

const MatchList = () => {
  useEffect(() => {
    document.getElementById('matchlist').classList.add('selected');
    return () => {
      document.getElementById('matchlist').classList.remove('selected');
      };
  }, []);
  return (
    <div>MatchList</div>
  )
}

export default MatchList;