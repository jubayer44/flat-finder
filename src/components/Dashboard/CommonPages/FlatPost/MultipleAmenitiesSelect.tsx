import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 ,
      width: 250,
    },
  },
};

const names = [
  "Wifi",
  "Gym",
  "Parking",
  "Swimming"
];

function getStyles(name: string, amenities: readonly string[], theme: Theme) {
  return {
    fontWeight:
    amenities?.indexOf(name) === -1
        ? theme?.typography.fontWeightRegular
        : theme?.typography.fontWeightMedium,
  };
}

export default function MultipleAmenitiesSelect({amenities, setAmenities}: {amenities: string[], setAmenities: any}) {
  const theme = useTheme();
  

  const handleChange = (event: SelectChangeEvent<typeof amenities>) => {
    const {
      target: { value },
    } = event;
    setAmenities(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{  width: "100%" }}>
        <InputLabel size="small" id="demo-multiple-chip-label">Amenities</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          size="small"  
          fullWidth
          value={amenities}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Amenities" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value: string) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, amenities, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
