interface TitleNameTypes {
  title: string;
  description: string;
  onClick: () => void;
}

export const TitleName = (props: TitleNameTypes) => {
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <button onClick={props.onClick}>Button</button>
    </>
  )
}