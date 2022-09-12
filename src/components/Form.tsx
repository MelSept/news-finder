import React, { ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import useNews from "../hooks/useNews";

const Categories = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Form = (): ReactElement => {
  const { category, handleChangeCategory } = useNews();

  return (
    <div>
      <form>
        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>
          <Select label="Categoria">
            {Categories.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
          <Box sx={{ marginTop: 2 }}>
            {" "}
            <Button fullWidth variant="contained">
              Buscar Noticias
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
