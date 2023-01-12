import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function FloatingActionButtons() {
  return (
    <div className='Bottom_right'>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab variant="extended">
        <AnnouncementIcon sx={{ mr: 1 }} />
        문의 사항   
      </Fab>
    </Box>
    </div>
  );
}