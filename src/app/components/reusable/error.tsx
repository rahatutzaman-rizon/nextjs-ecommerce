interface ErrorProps {
    message: string;
  }
  
  export default function Error({ message }: ErrorProps) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{message}</div>
      </div>
    );
  }
  