export const basicsList = [
    {
        type: 'input', // 表单类型
        label: '输入框', // 标题文字
        icon: 'icon-write',
        options: {
            type: 'text',
            width: '100%', // 宽度
            defaultValue: '', // 默认值
            placeholder: '请输入', // 没有输入时，提示文字
            clearable: false,
            maxLength: null,
            hidden: false, // 是否隐藏，false显示，true隐藏
            disabled: false, // 是否禁用，false不禁用，true禁用
        },
        model: '', // 数据字段
        key: '',
        rules: [
            //验证规则
            {
                required: false, // 必须填写
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'textarea', // 表单类型
        label: '文本框', // 标题文字
        icon: 'icon-edit',
        options: {
            width: '100%', // 宽度
            minRows: 4,
            maxRows: 6,
            maxLength: null,
            defaultValue: '',
            clearable: false,
            hidden: false, // 是否隐藏，false显示，true隐藏
            disabled: false,
            placeholder: '请输入',
        },
        model: '', // 数据字段
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'number', // 表单类型
        label: '数字输入框', // 标题文字
        icon: 'icon-number',
        options: {
            width: '100%', // 宽度
            defaultValue: 0, // 默认值
            min: null, // 可输入最小值
            max: null, // 可输入最大值
            precision: null,
            step: 1, // 步长，点击加减按钮时候，加减多少
            hidden: false, // 是否隐藏，false显示，true隐藏
            disabled: false, //是否禁用
            placeholder: '请输入',
        },
        model: '', // 数据字段
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'select', // 表单类型
        label: '下拉选择器', // 标题文字
        icon: 'icon-xiala',
        options: {
            width: '100%', // 宽度
            defaultValue: undefined, // 下拉选框请使用undefined为默认值
            multiple: false, // 是否允许多选
            disabled: false, // 是否禁用
            clearable: false, // 是否显示清除按钮
            hidden: false, // 是否隐藏，false显示，true隐藏
            placeholder: '请选择', // 默认提示文字
            dynamicKey: '',
            dynamicParam: '',
            dynamic: false,
            dynamicUrl: '', //获取外部数据接口url
            dynamicType: {},
            combineHandle: false, //可联动操作
            options: [
                // 下拉选择项配置
                {
                    value: '1',
                    label: '下拉框1',
                },
                {
                    value: '2',
                    label: '下拉框2',
                },
            ],
            showSearch: false, // 是否显示搜索框，搜索选择的项的值，而不是文字
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'checkbox',
        label: '多选框',
        icon: 'icon-duoxuan1',
        options: {
            disabled: false, //是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            defaultValue: [],
            dynamicKey: '',
            dynamic: false,
            combineHandle: false, //可联动操作
            options: [
                {
                    value: '1',
                    label: '选项1',
                },
                {
                    value: '2',
                    label: '选项2',
                },
                {
                    value: '3',
                    label: '选项3',
                },
            ],
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'radio', // 表单类型
        label: '单选框', // 标题文字
        icon: 'icon-danxuan-cuxiantiao',
        options: {
            disabled: false, //是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            defaultValue: '', // 默认值
            dynamicKey: '',
            dynamic: false,
            combineHandle: false, //可联动操作
            options: [
                {
                    value: '1',
                    label: '选项1',
                },
                {
                    value: '2',
                    label: '选项2',
                },
                {
                    value: '3',
                    label: '选项3',
                },
            ],
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'date', // 表单类型
        label: '日期选择框', // 标题文字
        icon: 'icon-calendar',
        options: {
            width: '100%', // 宽度
            defaultValue: '', // 默认值，字符串 12:00:00
            rangeDefaultValue: [], // 默认值，字符串 12:00:00
            range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
            showTime: false, // 是否显示时间选择器
            disabled: false, // 是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            clearable: false, // 是否显示清除按钮
            placeholder: '请选择',
            rangePlaceholder: ['开始时间', '结束时间'],
            format: 'YYYY-MM-DD', // 展示格式  （请按照这个规则写 YYYY-MM-DD HH:mm:ss，区分大小写）
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'time', // 表单类型
        label: '时间选择框', // 标题文字
        icon: 'icon-time',
        options: {
            width: '100%', // 宽度
            defaultValue: '', // 默认值，字符串 12:00:00
            disabled: false, // 是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            clearable: false, // 是否显示清除按钮
            placeholder: '请选择',
            format: 'HH:mm:ss', // 展示格式
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'rate', // 表单类型
        label: '评分', // 标题文字
        icon: 'icon-pingfen_moren',
        options: {
            defaultValue: 0,
            max: 5, // 最大值
            disabled: false, // 是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            allowHalf: false, // 是否允许半选
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
        unique: false,
        is_inherited: false,
        is_auth: false,
        is_combine: false, //可被联动操作
        combine_item: '', //联动操作对应字段
    },
    {
        type: 'slider', // 表单类型
        label: '滑动输入条', // 标题文字
        icon: 'icon-menu',
        options: {
            width: '100%', // 宽度
            defaultValue: 0, // 默认值， 如果range为true的时候，则需要改成数组,如：[12,15]
            disabled: false, // 是否禁用
            hidden: false, // 是否隐藏，false显示，true隐藏
            min: 0, // 最小值
            max: 100, // 最大值
            step: 1, // 步长，取值必须大于 0，并且可被 (max - min) 整除
            showInput: false, // 是否显示输入框，range为true时，请勿开启
            // range: false // 双滑块模式
        },
        model: '',
        key: '',
        rules: [
            {
                required: false,
                message: '必填项',
            },
        ],
    },
   
 
    
] as const
