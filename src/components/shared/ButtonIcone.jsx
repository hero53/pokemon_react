import React from "react";
import { Button } from "@mui/material";
import { RemoveRedEye, Edit, Delete, Face2 ,ArrowForwardIos} from "@mui/icons-material"; // Importez ici uniquement les icônes nécessaires

// Mappage des icônes disponibles
const icons = {
  RemoveRedEye: RemoveRedEye,
  Edit: Edit,
  Delete: Delete,
  Face2: Face2, // Assurez-vous que l'icône existe dans @mui/icons-material
  ArrowForwardIos:ArrowForwardIos,
};

function ButtonIcone({
  label = null,
  tcolor = null,
  tsize = null,
  bcolor = null,
  bsize = null,
  bvariant,
  icon = null,
  icolor = null,
  isize = null,
}) {
  const IconComponent = icons[icon]; // Cherchez l'icône dans l'objet de mappage

  return (
    <Button
      color={bcolor}
      size={bsize}
      variant={bvariant || undefined}
      sx={{ color: tcolor, fontSize: tsize }}
      endIcon={
        IconComponent ? <IconComponent color={icolor} size={isize} /> : null
      }
    >
      {label}
    </Button>
  );
}

export default ButtonIcone;
