import { RouteComponentProps } from "@reach/router";

const Route = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent;

export default Route;
