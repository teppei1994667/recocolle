import { Button, ButtonProps } from "@mui/material";

export type CustomButtonProps = ButtonProps & {
  text?: string;
};

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <>
      <Button
        variant="text"
        className="h-18 w-40"
        {...props}
        sx={{
          fontSize: "20px",
          color: "#fbf2f2ff",
          borderRadius: "50px",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          "&:hover": {
            color: "#000000ff",
            backgroundColor: "rgba(204, 204, 204, 0.3)",
          },
          ...props.sx,
        }}
      >
        {props.text ? props.text : ""}
      </Button>
    </>
  );
};
