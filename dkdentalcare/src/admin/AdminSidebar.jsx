
import { List, ListItem, ListItemText } from '@mui/material';

const AdminSidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
      {/* Přidejte další položky menu podle potřeby */}
    </List>
  );
};

export default AdminSidebar;
