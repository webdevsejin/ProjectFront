import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function MainAlert() {
  setTimeout(function () {
    alert(<MainAlert/>);
  }, 3000);

  return (
    
    <Stack sx={{ width: '100%' }} spacing={2}>
    <div className='MainAlert'>
      <Alert severity="info">최신 소식과 할인정보를 만나보세요!</Alert>
      </div>
    </Stack>
  );
}