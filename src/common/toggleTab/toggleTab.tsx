import "./toggleTab.css"

function ToggleTab(props: AppProps) {

    const showFirst = props.isFirst ? "toggle-tab tab1" : "toggle-tab";
    const showSecond = props.isFirst ? "toggle-tab" : "toggle-tab tab2";

  return (
    <div className='toggle-tab-parent'>
        <div className={showFirst} onClick={props.setFirst}>{props.first}</div>
        <div className={showSecond} onClick={props.setSecond}>{props.second}</div>
    </div>
  )
}

type RequiredProps = {
    first: string;
    second: string;
    isFirst: boolean;
}

type DefaultProps = {
    first: string;
    second: string;
    setFirst: any;
    setSecond: any;
    isFirst: boolean;
}

type AppProps = RequiredProps & DefaultProps;

ToggleTab.defaultProps = {
    first: "First",
    second: "Second",
    isFirst: true
} as DefaultProps;

export default ToggleTab;