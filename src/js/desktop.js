import { Button, Dropdown } from "kintone-ui-component";
import React from "react";
import ReactDOM from "react-dom";
import "../css/desktop.css";

class Search extends React.Component {

  constructor(props) {
    super(props);

    let items = [
      {
        "label": "AL",
        "value": "AL",
        "isDisabled": false
      },
      {
        "label": "AK",
        "value": "AK",
        "isDisabled": false
      },
      {
        "label": "AZ",
        "value": "AZ",
        "isDisabled": false
      },
      {
        "label": "AR",
        "value": "AR",
        "isDisabled": false
      },
      {
        "label": "CA",
        "value": "CA",
        "isDisabled": false
      },
      {
        "label": "CO",
        "value": "CO",
        "isDisabled": false
      },
      {
        "label": "CT",
        "value": "CT",
        "isDisabled": false
      },
      {
        "label": "DE",
        "value": "DE",
        "isDisabled": false
      },
      {
        "label": "FL",
        "value": "FL",
        "isDisabled": false
      },
      {
        "label": "GA",
        "value": "GA",
        "isDisabled": false
      },
      {
        "label": "HI",
        "value": "HI",
        "isDisabled": false
      },
      {
        "label": "ID",
        "value": "ID",
        "isDisabled": false
      },
      {
        "label": "IL",
        "value": "IL",
        "isDisabled": false
      },
      {
        "label": "IN",
        "value": "IN",
        "isDisabled": false
      },
      {
        "label": "IA",
        "value": "IA",
        "isDisabled": false
      },
      {
        "label": "KS",
        "value": "KS",
        "isDisabled": false
      },
      {
        "label": "KY",
        "value": "KY",
        "isDisabled": false
      },
      {
        "label": "LA",
        "value": "LA",
        "isDisabled": false
      },
      {
        "label": "ME",
        "value": "ME",
        "isDisabled": false
      },
      {
        "label": "MD",
        "value": "MD",
        "isDisabled": false
      },
      {
        "label": "MA",
        "value": "MA",
        "isDisabled": false
      },
      {
        "label": "MI",
        "value": "MI",
        "isDisabled": false
      },
      {
        "label": "MN",
        "value": "MN",
        "isDisabled": false
      },
      {
        "label": "MS",
        "value": "MS",
        "isDisabled": false
      },
      {
        "label": "MO",
        "value": "MO",
        "isDisabled": false
      },
      {
        "label": "MT",
        "value": "MT",
        "isDisabled": false
      },
      {
        "label": "NB",
        "value": "NB",
        "isDisabled": false
      },
      {
        "label": "NV",
        "value": "NV",
        "isDisabled": false
      },
      {
        "label": "NH",
        "value": "NH",
        "isDisabled": false
      },
      {
        "label": "NJ",
        "value": "NJ",
        "isDisabled": false
      },
      {
        "label": "NM",
        "value": "NM",
        "isDisabled": false
      },
      {
        "label": "NY",
        "value": "NY",
        "isDisabled": false
      },
      {
        "label": "NC",
        "value": "NC",
        "isDisabled": false
      },
      {
        "label": "ND",
        "value": "ND",
        "isDisabled": false
      },
      {
        "label": "OH",
        "value": "OH",
        "isDisabled": false
      },
      {
        "label": "OK",
        "value": "OK",
        "isDisabled": false
      },
      {
        "label": "OR",
        "value": "OR",
        "isDisabled": false
      },
      {
        "label": "PA",
        "value": "PA",
        "isDisabled": false
      },
      {
        "label": "RI",
        "value": "RI",
        "isDisabled": false
      },
      {
        "label": "SC",
        "value": "SC",
        "isDisabled": false
      },
      {
        "label": "SD",
        "value": "SD",
        "isDisabled": false
      },
      {
        "label": "TN",
        "value": "TN",
        "isDisabled": false
      },
      {
        "label": "TX",
        "value": "TX",
        "isDisabled": false
      },
      {
        "label": "UT",
        "value": "UT",
        "isDisabled": false
      },
      {
        "label": "VT",
        "value": "VT",
        "isDisabled": false
      },
      {
        "label": "VA",
        "value": "VA",
        "isDisabled": false
      },
      {
        "label": "WA",
        "value": "WA",
        "isDisabled": false
      },
      {
        "label": "WV",
        "value": "WV",
        "isDisabled": false
      },
      {
        "label": "WI",
        "value": "WI",
        "isDisabled": false
      },
      {
        "label": "WY",
        "value": "WY",
        "isDisabled": false
      },
      {
        "label": "DC",
        "value": "DC",
        "isDisabled": false
      }
    ];
    this.state = { items: items, value: [] };
  }

  render() {
    return (
      <div>
        <div className="custom-button">
          <Dropdown
            items={this.state.items}
            value={this.state.value}
            onChange={value => this.onChange(value)}
          />
        </div>
        <div className="custom-button">
          <Button
            text="Search"
            type="submit"
            isDisabled={false}
            isVisible={true}
            onClick={e => this.onSubmit(e)}
          />
        </div>
      </div>
    );
  }

  onChange(value) {
    this.setState({ value });
  }

  onSubmit(e) {
    let val = this.state.value;
    if (!val) return;
    let appId = kintone.app.getId();
    let url = "/k/" + appId + '/?query=dropdown%20in%20("' + val + '")';
    location.href = url;
  }
}

kintone.events.on("app.record.index.show", event => {
  const headerMenu = kintone.app.getHeaderMenuSpaceElement();
  ReactDOM.render(<Search />, headerMenu);
});
