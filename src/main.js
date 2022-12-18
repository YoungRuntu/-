import Vue from "vue";
import App from "./App.vue";
// 按需引入组件，引入方式见https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru
import {
  Input,
  Select,
  Option,
  Form,
  FormItem,
  RadioGroup,
  RadioButton,
  Switch
} from "element-ui";
import "./index.css";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Switch);

// Vue.use(Element);

if (process.env.NODE_ENV !== "production") {
  const appArr = [
    { title: "设计页组件", type: "set" },
    { title: "设计页属性组件", type: "designConfiguration" },
    { title: "新增/编辑 主表组件", type: "add" },
    { title: "新增/编辑 主表多字段组件", type: "addMultiple" },
    { title: "新增/编辑 子表组件", type: "child" },
    { title: "列表页组件", type: "table" },
    { title: "详情页组件", type: "preview" }
  ];
  let temp = [{
    "data_id": "",
    "plan_name": "",
    "plan_number": "2022-301W01",
    "plan_type": "月度",
    "applicant": "1234567890",
    "applicant_unit": "123456789",
    "subunit": "",
    "applicant_date": "2022-12-23",
    "quality_record_number": "AWF323434",
    "mode_type": "Plan",
    "tasks": [{ //工程任务
      "data_id": "",
      "project_name": "任务1",
      "project_type": "A",
      "parent_id": "",
      "function_area": "区域1",
      "associated_devices": "设备1",
      "requirement_for_construction": "标准11",
      "remark": "备注",
      "file": "/stopere/werere/sd.pdf",
      "mode_type": "Task",
      "procedures": [{
        "data_id": "",
        "process_name": "工序1",
        "remark": "",
        "parent_id": "",
        "mode_type": "Procedure",
        "steps": [{
          "data_id": "",
          "process_desc": "步骤1",
          "parent_id": "",
          "unit_engineering_quantity": "小时",
          "quantity_engineering_quantity": "3",
          "mode_type": "Step"
        }],
        "materials": [{
          "data_id": "",
          "parent_id": "",
          "material_name": "物料A",
          "material_code": "ASF334",
          "standard_materials": "标准AB",
          "additional_note": "备注",
          "main_unit": "个",
          "auxiliary_unit": "个",
          "material_demand": "3",
          "material_purchase_main": "",
          "material_purchase_auxiliary": "",
          "whether_workshop_supply": "",
          "mode_type": "Material"
        }]
      },
      { //工序
        "data_id": "",
        "process_name": "工序2",
        "remark": "",
        "parent_id": "",
        "mode_type": "Procedure",
        "steps": [{ //步骤
          "data_id": "",
          "process_desc": "步骤1",//工序名称
          "parent_id": "",
          "unit_engineering_quantity": "小时",//工程量单位
          "quantity_engineering_quantity": "3",//工程量数量
          "mode_type": "Step"
        }],
        "materials": [{  // 物料
          "data_id": "",
          "parent_id": "",
          "material_name": "物料A",//物料名称
          "material_code": "ASF334",//物料编码
          "standard_materials": "标准AB",//标准
          "additional_note": "备注",// 补充说明
          "main_unit": "个", //主单位
          "auxiliary_unit": "个",// 副单位
          "material_demand": "3",//材料需求量
          "material_purchase_main": "",// 材料采购量 主
          "material_purchase_auxiliary": "",//材料采购量 副
          "whether_workshop_supply": "",// 车间
          "mode_type": "Material"
        }]
      }
      ]
    }]
  }]
  const customConfig = {
    componentId: "111",
    data: JSON.stringify(temp),
    saveValue: [],
    component: {
      columnStyle: {
        title: "二开测试title"
      }
    },

    formConfig: {
      form_name: "二开数据"
    },
    onChange: values => {
      console.log(values);
    },
    changeConfiguration: values => {
      console.log(values);
    },
    configuration: "{\"allowClear\":true,\"size\":\"大\",\"placeholder\":\"444\"}"
  };

  new Vue({
    render: h => {
      return (
        <div class="app-container">
          <App
            style={{ width: "100%" }}
            customConfig={customConfig}
            type='add'
          />
          {/* {appArr.map((item, index) => {
            return (
              <div class="components">
                <span class="title">{item.title}：</span>
                <App
                  style={{ width: "calc(100% - 220px)" }}
                  customConfig={customConfig}
                  type={item.type}
                />
              </div>
            );
          })} */}
        </div>
      );
    }
  }).$mount("#app");
} else {
  if (!window.CUSTOM_PLUGIN) {
    window.CUSTOM_PLUGIN = new Map();
  }

  window.CUSTOM_PLUGIN.set(
    process.env.VUE_APP_CUSTOM_PLUGIN_ID,
    (dom, props) => {
      if (dom.childNodes.length == 0) {
        const div = document.createElement("div");
        dom.appendChild(div);
        new Vue({
          render: h => <App type={props.type} customConfig={props || {}} />
        }).$mount(div);
      }

    }
  );
}

