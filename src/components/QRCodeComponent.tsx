import QRCode from "react-qr-code";

interface QRCodeComponentProps {
  url: string;
  size?: number;
}

export const QRCodeComponent = ({ url, size = 128 }: QRCodeComponentProps) => {
  return (
    <div className="bg-white p-2 rounded border border-gray-300">
      <QRCode
        size={size}
        value={url}
        fgColor="#000000"
        bgColor="#ffffff"
        title="QR Code Recensioni Google"
      />
    </div>
  );
};
