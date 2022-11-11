export default function reverse() {
    console.log("executed");
    this.setState(this.state.items.reverse());
}