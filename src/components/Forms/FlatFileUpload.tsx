import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
    name: string;
    label?: string;
    title?: string;
    sx?: SxProps;
};

export default function FlatFileUpload({ name, label, title, sx }: TProps) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ...field } }) => {
                return (
                    <>
                        <Typography fontSize={14}>
                            {title}
                        </Typography>
                        <Button
                            fullWidth
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{ ...sx }}
                        >
                            {label || "Upload files"}
                            <Input
                                {...field}
                                type="file"
                                name={name}
                                onChange={(e: any) => {
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    onChange(files);
                                }}
                                inputProps={{ multiple: true }}
                                sx={{
                                    display: "none",
                                }}
                            />
                        </Button>
                        {value && (
                            <div>
                                {value.map((file: File, index: number) => (
                                    <Typography sx={{color: "green"}} key={index}>{file.name}</Typography>
                                ))}
                            </div>
                        )}
                    </>
                );
            }}
        />
    );
}
