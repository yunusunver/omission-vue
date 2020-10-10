import Swal from "sweetalert2";



export const successMessage = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
};

export const deleteMessage = (text) => {
     return Swal.fire({
        title: 'Emin misin?',
        text: `${text}`,
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet sil.',
        cancelButtonText: 'Vazgeç.'
      })
};


