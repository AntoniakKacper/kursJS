import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface PasswordInputProps {
  name: string;
  label: string;
  variant: "standard" | "filled" | "outlined";
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  label,
  variant,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      fullWidth
      label={label}
      color="secondary"
      variant={variant}
      type={showPassword ? "text" : "password"}
      error={!!errors[name]}
      defaultValue=""
      helperText={errors[name] ? errors[name]?.message : ""}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <VisibilityIcon style={{ fill: "#989898" }} />
              ) : (
                <VisibilityOffIcon style={{ fill: "#989898" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
