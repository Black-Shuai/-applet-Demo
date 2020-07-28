// components/imageUploader/imageUploader.js
const app=getApp();
Component({
  /**
   * Component properties
   */
  properties: {
    uploadname:{
      type:String,
      value:'电子签名上传'
    }
  },

  /**
   * Component initial data
   */
  data: {
    images: []
  },

  /**
   * Component methods
   */
  methods: {
    showImage(){
      console.log('触发组件'+wx.getStorageSync('SignImage'))
      this.setData({
        isFirstSign:false,
        images:[wx.getStorageSync('SignImage')]
      })
    },
    handleChooseImage() {
      if (this.data.images.length >= 1) {
        wx.showToast({
          title: '图片数量超过上限',
          icon: 'none'
        });
        return;
      }
      // wx.chooseImage({
      //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      //   success: (res) => {
      //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      //     // this.data.images = this.data.images.concat(res.tempFilePaths);
      //     // this.setData({
      //     //   images: this.data.images
      //     // });
          
      //     this.triggerEvent('change', this.data.images);
      //   }
      // });
        wx.navigateTo({
          url: '/pages/components/SignIt/SginIt'
        })
    },

    handlePreview(e) {
      wx.previewImage({
        urls: [e.currentTarget.dataset.src],
      });
    },

    handleDelete(e) {
      console.log(e);
      this.data.images.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        images: this.data.images
      });
      this.triggerEvent('change', this.data.images);
    }
    
  }
})