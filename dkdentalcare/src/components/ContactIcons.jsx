import React from 'react';
import { Box, Typography } from '@mui/material';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

const MOCKDATA = [
  { title: 'Email', description: 'dkdentalcaresro@gmail.com', icon: IconAt },
  { title: 'Telefon recepce', description: '+420 379 725 564 ', icon: IconPhone },
  { title: 'Adresa', description: 'Branská 55, 344 01 Domžalice', icon: IconMapPin },
];

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <Box display="flex" alignItems="center" {...others}>
      <Box mr={2}>
        <Icon style={{ width: 24, height: 24 }} />
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
}

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Box>{items}</Box>;
}
